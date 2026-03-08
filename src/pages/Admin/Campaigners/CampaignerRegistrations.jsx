import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import CustomPagination from "@/components/utils/CustomPagination";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentCampaign } from "@/store/campaign/campaign.service";
import { getCampainer } from "@/store/campaigners/campaigners.service";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Eye, MoreHorizontal, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CampaignerDetailsModal from "@/components/utils/CampaignerDetailsModal";

const CampaignerRegistrations = () => {
  const { campaginers, campaginerTotalPages, campainerLoading } = useSelector(
    (state) => state.campaginer,
  );
  const dispatch = useDispatch();
  const { currentCampaign } = useSelector((state) => state.campaign);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [campaigner, setSelectedCampaigner] = useState(null);
  const pageSize = 15;

  useEffect(() => {
    dispatch(getCurrentCampaign());
  }, [dispatch]);

  useEffect(() => {
    if (!currentCampaign?._id) return;

    dispatch(
      getCampainer({
        id: currentCampaign?._id,
        status: "pending",
        campStatus: "active",
        page,
        pageSize,
        sort: "created_desc",
        search,
      }),
    );
  }, [currentCampaign?._id, search, page, dispatch]);

  return (
    <div className="space-y-6">
      {campaginers?.length > 5 && (
        <Input
          placeholder="Search campaigner..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />
      )}

      {/* TABLE */}
      <div className="rounded-2xl border shadow-sm overflow-hidden">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="w-[20%]">Name</TableHead>
              <TableHead className="w-[15%] text-center">Phone</TableHead>
              <TableHead className="w-[25%] text-center">Target</TableHead>
              <TableHead className="w-[15%] text-center">
                Touch With Devote
              </TableHead>
              <TableHead className="w-[30%] text-center">Status</TableHead>
              <TableHead className="w-[10%] text-center">Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {campainerLoading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  Loading...
                </TableCell>
              </TableRow>
            ) : campaginers?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-6">
                  No Campaigners found
                </TableCell>
              </TableRow>
            ) : (
              campaginers?.map((item) => {
                return (
                  <TableRow
                    key={item._id}
                    className="hover:bg-muted/50 transition"
                  >
                    <TableCell className="font-medium">{item.name}</TableCell>

                    <TableCell className="text-center">
                      {item.phoneNumber}
                    </TableCell>

                    <TableCell className="text-center">
                      ₹{item.targetAmount.toLocaleString("en-IN")}
                    </TableCell>
                    <TableCell className="text-center">
                      {item?.templeDevoteInTouch?.devoteName}
                    </TableCell>
                    <TableCell className="text-center">{item.status}</TableCell>
                    <TableCell className="text-center">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal size={18} />
                          </Button>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent align="end">
                          <DropdownMenuItem
                            onClick={() => handleApprove(item._id)}
                            className="cursor-pointer"
                          >
                            <Check className="mr-2 h-4 w-4 text-green-600" />
                            Approve
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() => handleReject(item._id)}
                            className="cursor-pointer"
                          >
                            <X className="mr-2 h-4 w-4 text-red-600" />
                            Reject
                          </DropdownMenuItem>

                          <DropdownMenuItem
                            onClick={() => setSelectedCampaigner(item)}
                            className="cursor-pointer"
                          >
                            <Eye className="mr-2 h-4 w-4 text-muted-foreground" />
                            View Details
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        {/* DELETE MODAL */}
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="icon-sm" variant="destructive">
                              <Trash2 size={16} />
                            </Button>
                          </AlertDialogTrigger>

                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>
                                Delete Campaigner
                              </AlertDialogTitle>

                              <AlertDialogDescription>
                                This action cannot be undone. This will
                                permanently delete the campaigner and their
                                data.
                              </AlertDialogDescription>
                            </AlertDialogHeader>

                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>

                              <AlertDialogAction
                                onClick={() => handleDelete(item._id)}
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>
      {campaginerTotalPages > 1 && (
        <div className="w-full">
          <CustomPagination
            totalPages={campaginerTotalPages}
            currentPage={page}
            onPageChange={setPage}
          />
        </div>
      )}
      {campaigner && (
        <CampaignerDetailsModal
          campaigner={campaigner}
          onClose={() => setSelectedCampaigner(null)}
        />
      )}
    </div>
  );
};

export default CampaignerRegistrations;
