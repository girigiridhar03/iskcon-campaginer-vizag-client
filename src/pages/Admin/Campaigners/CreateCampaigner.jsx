import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import {
  getMediaList,
  getTempleDevotesList,
} from "@/store/campaigners/campaigners.service";

export default function CreateCampaigner() {
  const dispatch = useDispatch();
  const { templeDevotesList, templeDevotesLoading } = useSelector(
    (state) => state.campaginer,
  );
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    campaignId: "",
    templeDevoteInTouch: "",
    recentImage: "",
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getTempleDevotesList());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMediaList());
  }, [dispatch]);

  const campaigns = [
    { id: "1", name: "Temple Renovation" },
    { id: "2", name: "Annadanam Seva" },
  ];

  const devotes = [
    { id: "1", name: "Ramesh Das" },
    { id: "2", name: "Krishna Prabhu" },
  ];

  const recentImages = ["recent1.jpg", "recent2.jpg", "recent3.jpg"];

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    if (image) {
      data.append("image", image);
    }

    console.log("Submitting:", formData);

    setTimeout(() => {
      setLoading(false);
      alert("Campaigner Created Successfully!");
    }, 1000);
  };

  return (
    <div className="p-8 w-full max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold">Create Campaigner</h1>
        <p className="text-muted-foreground">
          Assign campaign, devote and upload campaigner image.
        </p>
      </div>

      <Card className="shadow-lg border hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <CardTitle>Campaigner Information</CardTitle>
          <CardDescription>
            Fill in the required details carefully.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Name</Label>
                <Input
                  name="name"
                  placeholder="Enter campaigner name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>Current Campaign</Label>
                <Input
                  name="campaignId"
                  placeholder="Current Campaign"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label>Select Devote In Touch</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({
                      ...formData,
                      templeDevoteInTouch: value,
                    })
                  }
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue
                      placeholder={
                        templeDevotesLoading
                          ? "Loading devotes..."
                          : "Choose devote"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {templeDevotesList?.map((d) => (
                      <SelectItem key={d._id} value={d._id}>
                        {d.devoteName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Images */}
              <div className="space-y-2">
                <Label>Recent Images</Label>
                <Select
                  onValueChange={(value) =>
                    setFormData({ ...formData, recentImage: value })
                  }
                >
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Select recent image" />
                  </SelectTrigger>
                  <SelectContent>
                    {recentImages.map((img) => (
                      <SelectItem key={img} value={img}>
                        {img}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Upload Image */}
              <div className="space-y-2">
                <Label>Upload Image</Label>

                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="absolute inset-0 opacity-0 cursor-pointer z-10"
                  />

                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:bg-muted transition-all duration-200">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="mx-auto h-28 object-cover rounded-md"
                      />
                    ) : (
                      <span className="text-muted-foreground">
                        Click to upload or drag image
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Campaigner"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
