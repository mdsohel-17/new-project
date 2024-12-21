export const COMMAN_FORM_TYPE = {
  TEXT_FIELD: "text",
  NUMBER_FIELD: "number",
  EMAIL_FIELD: "email",
  TEXT_AREA_FIELD: "textarea",
  SELECT_FIELD: "select",
};

export const FORM_DETAILS = [
  {
    lable: "Name",
    field: "name",
    type: COMMAN_FORM_TYPE.TEXT_FIELD,
  },
  {
    lable: "Company",
    field: "company",
    type: COMMAN_FORM_TYPE.TEXT_FIELD,
  },
  {
    lable: "Email",
    field: "email",
    type: COMMAN_FORM_TYPE.EMAIL_FIELD,
  },
  {
    lable: "Phone",
    field: "phone",
    type: COMMAN_FORM_TYPE.NUMBER_FIELD,
  },
  {
    lable: "Category",
    field: "category",
    type: COMMAN_FORM_TYPE.SELECT_FIELD,
    options: [
      { value: "medicalRepresentatives", option: "Medical Representatives" },
      { value: "mechanicalKits", option: "Mechanical Kits" },
      { value: "doctors", option: "Doctors" },
      { value: "ecommerceBags", option: "Ecommerce Bags" },
      { value: "foodDelivery", option: "Food Delivery" },
      { value: "electricians", option: "Electricians" },
      {
        value: "sportsKitBags",
        option:
          "Sports Kit Bags (Badminton Cover / Bag Cover / Gold Bags / Tennis Bags)",
      },
      { value: "schoolBags", option: "School Bags" },
      { value: "womenPurse", option: "Women Purse" },
      { value: "toteBags", option: "Tote Bags" },
      { value: "juteBags", option: "Jute Bags" },
      { value: "aprons", option: "Aprons" },
      { value: "ppeKit", option: "Ppe Kit" },
    ],
  },
  {
    lable: "Quantity",
    field: "quantity",
    type: COMMAN_FORM_TYPE.NUMBER_FIELD,
  },
  {
    lable: "Order Details",
    field: "orderDetails",
    type: COMMAN_FORM_TYPE.TEXT_AREA_FIELD,
  },
];
