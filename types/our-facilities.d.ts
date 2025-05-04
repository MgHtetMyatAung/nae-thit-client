type TypeOfFacilities = {
  _id: string;
  clinicname: string;
  openinghr: string;
  location: string;
  photo: string;
};

type TypeOfFacilitiesData = {
  success: boolean;
  count: number;
  facilities: TypeOfFacilities[];
};
