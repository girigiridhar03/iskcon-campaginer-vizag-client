import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewSeva,
  getSingleSevaDetails,
  updateSeva,
} from "@/store/seva/seva.service";
import { toast } from "@/utils/toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const AddNewSeva = () => {
  const [formData, setFormData] = useState({
    sevaCategory: "",
    sevaSubCategory: "",
    sevaCode: "",
    sevaSubCode: "",
    sevaCategoryId: "",
    sevaSubCategoryId: "",
    sevaAmount: "",
    sevaPoints: [""],
  });
  const dispatch = useDispatch();
  const { addSevaLoading, getSingleSeva } = useSelector((state) => state.seva);
  const { pathname } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();

  const isEdit = pathname.includes("edit");

  const getTrimmedValue = (value) => String(value ?? "").trim();

  useEffect(() => {
    if (!id || !isEdit) return;

    dispatch(getSingleSevaDetails(id));
  }, [dispatch, id, isEdit]);

  useEffect(() => {
    if (!Object.keys(getSingleSeva).length || !id) return;

    setFormData({
      sevaCategory: getSingleSeva?.sevaCategory ?? "",
      sevaSubCategory: getSingleSeva?.sevaSubCategory ?? "",
      sevaCode: getSingleSeva?.sevaCode ?? getSingleSeva?.SevaCode ?? "",
      sevaSubCode:
        getSingleSeva?.sevaSubCode ?? getSingleSeva?.SevaSubCode ?? "",
      sevaCategoryId: String(getSingleSeva?.sevaCategoryId ?? ""),
      sevaSubCategoryId: String(getSingleSeva?.sevaSubCategoryId ?? ""),
      sevaAmount: getSingleSeva?.sevaAmount ?? "",
      sevaPoints:
        Array.isArray(getSingleSeva?.sevaPoints) &&
        getSingleSeva.sevaPoints.length
          ? getSingleSeva.sevaPoints
          : [""],
    });
  }, [getSingleSeva, id]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePointChange = (index, value) => {
    const updatedPoints = [...formData.sevaPoints];
    updatedPoints[index] = value;

    setFormData((prev) => ({
      ...prev,
      sevaPoints: updatedPoints,
    }));
  };

  const addPoint = () => {
    setFormData((prev) => ({
      ...prev,
      sevaPoints: [...prev.sevaPoints, ""],
    }));
  };

  const removePoint = (index) => {
    const updatedPoints = formData.sevaPoints.filter((_, i) => i !== index);

    setFormData((prev) => ({
      ...prev,
      sevaPoints: updatedPoints.length ? updatedPoints : [""],
    }));
  };

  const isFormValid =
    getTrimmedValue(formData.sevaCategory) !== "" &&
    getTrimmedValue(formData.sevaSubCategory) !== "" &&
    getTrimmedValue(formData.sevaCode) !== "" &&
    getTrimmedValue(formData.sevaCategoryId) !== "" &&
    getTrimmedValue(formData.sevaSubCategoryId) !== "" &&
    formData.sevaAmount !== "" &&
    Number(formData.sevaAmount) > 0 &&
    formData.sevaPoints.every((point) => getTrimmedValue(point) !== "");

  const handleSubmit = async () => {
    if (!isFormValid) return;

    try {
      let result;

      if (isEdit) {
        result = await dispatch(updateSeva({ id, formData })).unwrap();
        toast.success("Seva Updated Successfully");
        navigate("/admin/seva-list");
      } else {
        result = await dispatch(addNewSeva(formData)).unwrap();
        toast.success("Seva Added Successfully");

        setFormData({
          sevaCategory: "",
          sevaSubCategory: "",
          sevaCode: "",
          sevaSubCode: "",
          sevaCategoryId: "",
          sevaSubCategoryId: "",
          sevaAmount: "",
          sevaPoints: [""],
        });
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };

  return (
    <section className="w-full">
      <div className="mx-auto w-full max-w-5xl">
        <Card className="rounded-2xl border shadow-sm">
          <div className="border-b px-5 py-5 sm:px-8">
            <div className="space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                {isEdit ? "Edit Seva" : "Add New Seva"}
              </h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                {isEdit
                  ? "Edit an existing seva offering and update its details or benefits."
                  : "Create a new seva offering with a clear structure, codes, amount, and included spiritual benefits."}
              </p>
            </div>
          </div>

          <div className="space-y-8 px-5 py-6 sm:px-8 sm:py-8">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold">Seva Structure</h3>
                  <p className="text-xs text-muted-foreground">
                    Define the main category, subcategory, and the internal IDs used to organize this seva.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <Label>Seva Category</Label>
                    <Input
                      placeholder="e.g. Dharma Sevak Seva (Life Patron)"
                      value={formData.sevaCategory}
                      onChange={(e) => handleChange("sevaCategory", e.target.value)}
                      className="h-11 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Seva Category ID</Label>
                    <Input
                      placeholder="e.g. 1"
                      type="number"
                      value={formData.sevaCategoryId}
                      onChange={(e) => handleChange("sevaCategoryId", e.target.value)}
                      className="h-11 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Seva Code</Label>
                    <Input
                      placeholder="e.g. DSS"
                      value={formData.sevaCode}
                      onChange={(e) => handleChange("sevaCode", e.target.value)}
                      className="h-11 bg-background uppercase"
                    />
                  </div>

                  <div className="space-y-2 sm:col-span-2">
                    <Label>Seva Sub Category</Label>
                    <Input
                      placeholder="e.g. Dharma Sevak Seva (Life Patron)"
                      value={formData.sevaSubCategory}
                      onChange={(e) => handleChange("sevaSubCategory", e.target.value)}
                      className="h-11 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Seva Sub Category ID</Label>
                    <Input
                      placeholder="e.g. 1"
                      type="number"
                      value={formData.sevaSubCategoryId}
                      onChange={(e) =>
                        handleChange("sevaSubCategoryId", e.target.value)
                      }
                      className="h-11 bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Seva Sub Code</Label>
                    <Input
                      placeholder="e.g. DSS"
                      value={formData.sevaSubCode}
                      onChange={(e) => handleChange("sevaSubCode", e.target.value)}
                      className="h-11 bg-background uppercase"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
                <div className="mb-4">
                  <h3 className="text-sm font-semibold">Offering Value</h3>
                  <p className="text-xs text-muted-foreground">
                    Set the contribution amount for this seva offering.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Seva Amount (₹)</Label>
                  <div className="relative">
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                      ₹
                    </span>
                    <Input
                      type="number"
                      placeholder="108000"
                      value={formData.sevaAmount}
                      onChange={(e) => handleChange("sevaAmount", e.target.value)}
                      className="h-12 bg-background pl-8 text-base font-medium"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-muted/20 p-4 sm:p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <Label className="text-sm font-semibold">Seva Benefits</Label>
                  <p className="text-xs text-muted-foreground">
                    Add spiritual privileges included in this seva.
                  </p>
                </div>

                <Button
                  type="button"
                  size="sm"
                  onClick={addPoint}
                  className="w-full gap-2 sm:w-auto"
                >
                  <Plus className="h-4 w-4" />
                  Add Benefit
                </Button>
              </div>

              <div className="space-y-3">
                {formData.sevaPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-3 rounded-xl border bg-background p-3 sm:flex-row sm:items-center"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {index + 1}
                    </div>

                    <Input
                      placeholder={`Benefit ${index + 1}`}
                      value={point}
                      onChange={(e) => handlePointChange(index, e.target.value)}
                      className="h-11 bg-background"
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      disabled={formData.sevaPoints.length === 1}
                      onClick={() => removePoint(index)}
                      className="self-end text-destructive hover:text-destructive sm:self-auto"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-end">
              <Button
                type="button"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => navigate("/admin/seva-list")}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSubmit}
                className="h-11 w-full px-6 text-base font-medium sm:w-auto"
                disabled={!isFormValid || addSevaLoading}
              >
                {addSevaLoading
                  ? "Loading..."
                  : isEdit
                    ? "Update Seva"
                    : "Save Seva"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AddNewSeva;
