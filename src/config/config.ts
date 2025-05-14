const config = {
   email:  {serviceId: process.env.NEXT_PUBLIC_SERVICE_ID||"",
    templateId:process.env.NEXT_PUBLIC_TEMPLATE_ID||"",
    publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY||""}
  };


  export default config;
  