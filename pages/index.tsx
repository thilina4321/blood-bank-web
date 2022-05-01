import Head from "next/head";
import { useEffect, useState } from "react";
import {
  HomeFaqInterface,
  HomeInformationInterface,
} from "../component-interfaces/home";
import Appointment from "../components/home/Appointment";
import Brand from "../components/home/Brand";
import HomeFaq from "../components/home/Faq";
import FindLocation from "../components/home/FindLocation";
import HomeInformation from "../components/home/Information";
import HomeYouMayLike from "../components/home/YouMayLike";
import useHttp from "../hooks/useHttp";

// const details: { title: string; shortDescription: string }[] = [
//   { title: "Title 1", shortDescription: "This is the des 1" },
//   { title: "Title 2", shortDescription: "This is the des 2" },
//   { title: "Title 3", shortDescription: "This is the des 3" },
//   { title: "Title 4", shortDescription: "This is the des 4" },
//   { title: "Title 5", shortDescription: "This is the des 5" },
// ];

// const locations: { district: string; province: string; city: string }[] = [
//   { district: "Colombo", province: "Western", city: "biyagama" },
//   { district: "Wayaba", province: "Nuwara", city: "daraniyagla" },
//   { district: "Colombo", province: "Western", city: "biyagama" },
// ];

export default function Home() {
  const [information, setInformation] = useState<HomeInformationInterface[]>(
    []
  );

  const [faqs, setFaqs] = useState<HomeFaqInterface[]>([]);

  const informationReq = useHttp({
    url: "/home-information",
    method: "get",
    onSucsses: (data: HomeInformationInterface[]) => {
      data = [
        {
          title: "Can I donate blood ? ",
          description:
            "See if you are eligible to donate blood today, or find answers to frequently asked questions.",
          imageUrl: "/main_first_can.jpeg",
          id: "6231d4a20ba8f8fb59d9c580",
        },
        {
          title: "Find a blood donor centre",
          description:
            "There are donor centres all across the country. Find one that's closest to you.",
          imageUrl: "/main_donor_center.jpeg",
          id: "6231d5e60ba8f8fb59d9c594",
        },
        {
          title: "Making your donation",
          description:
            "Discover how you can give blood, plasma or platelets, and book your next donation.",
          imageUrl: "/main_make_donation.jpeg",
          id: "6231d5ec0ba8f8fb59d9c596",
        },
        {
          title: "Learn About the Blood",
          description:
            "Know the fine details about blood, like what’s in it, who needs it, and where it goes after you give it.",
          imageUrl: "/main_learn.jpeg",
          id: "6231d5f30ba8f8fb59d9c598",
        },
      ];

      setInformation(data);
    },
  });

  const faqReq = useHttp({
    url: "/home/faqs",
    method: "get",
    onSucsses: (data: HomeFaqInterface[]) => {
      data = [
        {
          question:
            "If I've been diagnosed with COVID-19, when can I donate blood",
          answer: `Currently, you may donate blood when you have completed all required public health follow up and 7 days after you've made a full recovery from COVID-19. The 7 days begins on the first day once you are symptom-free.

          If you are diagnosed with COVID-19 but do not develop any symptoms, you may donate blood 7 days after the date of the positive test result.`,
          id: "61f7c0cbdb058a91390932f1",
        },
        {
          answer: `Yes, but if it was recent you may need to wait for a bit. It depends what you got, where and when.   

          Tattoos: You can donate plasma (and show off your new ink!) straight away after a tattoo, as long as it was done in a licensed tattoo parlour in Australia. But, you’ll need to wait four months to give blood or platelets, no matter how big or small the tattoo is — that means cosmetic tattoos, too.  
          Ear piercing: You can only donate plasma for the first 24 hours after having it done. After that, you can donate blood or platelets too.  
          Body piercing: You can only donate plasma for the next 4 months after having it done. After that, you’re good to give blood or platelets.  
          Whether it’s your ear or anywhere else, the piercing should be done with clean, single-use equipment. If it wasn’t or you aren’t sure, you’ll need to wait at least four months before you can donate anything. `,
          question: "I have a tattoo or piercing. Can I donate?",
          id: "62341e56486cd24f78fe3ff3",
        },
        {
          answer: `Most prescribed medicines don’t prevent you from donating, but the medical condition they are prescribed for might. 

          You can’t donate while you’re taking any of the following medications and for a period of time after you’ve finished: 
          
          Isotretinoin (Roaccutane, Oratane): used for acne  
          Acitretin (Neotigason): used for acne and psoriasis  
          Etretinate (Tigason): used for acne  
          Dutasteride (Avodart, Duodart): used for benign prostatic hypertrophy (enlarged prostate)  
          Finasteride (Finasta, Finnacar, Finpro, Propecia, Proscar): used for benign prostatic hypertrophy and hair loss  
          Leflunomide (Arava, Arabloc, Lunava): used for arthritis and sarcoidosis  
          Misoprostol (Cytotec): used for peptic ulcers  
          Denosumab (Prolia) or Raloxifene (Evista): used for osteoporosis  
          Even low doses of these medications could affect the vulnerable people receiving your blood (e.g. pregnant women and newborn babies).  
          
          If you take any of the medications listed above, wait until you’ve completed treatment and then contact us to see when you will become eligible to donate. If you’re on other prescribed medications, please note their names and give us a call to see if any of them will affect your eligibility to donate. 
          
          For your own health, please don’t stop taking any medication to donate. `,
          question:
            "What prescribed medications will prevent me from donating?",
          id: "62341e56486cd24f78fe3ff4",
        },
        {
          answer: `Maybe. It depends how low your iron is. 

          Your body uses iron to produce haemoglobin, which is a protein that transports oxygen around your body. If you’re low in iron, your body will take longer to produce haemoglobin. Then, if your haemoglobin level is below the normal range (known as anaemia), you might experience breathlessness and dizziness.  
          
          We need iron for our general health and wellbeing. Iron deficiencies can mean fatigue or trouble concentrating, or you might not be able to exercise to your full capacity.  
          
          During a blood donation you give about 250mg of iron with your red cells, so it’s important your iron levels aren’t low to begin with.  
          
          If you have been diagnosed with low iron (with or without low haemoglobin) you can’t donate until it’s been fully investigated, treated and corrected. This may include iron replacement therapy or dietary changes to increase iron intake. `,
          question: "I’ve been told I have anaemia. Can I donate blood?",
          id: "62341e56486cd24f78fe3ff5",
        },
      ];

      setFaqs(data);
    },
  });

  useEffect(() => {
    informationReq();
    faqReq();
  }, []);

  return (
    <div>
      <Head>
        <title> SL Blood Bank </title>
      </Head>
      <Brand />
      <HomeInformation informations={information} />
      <HomeFaq faqs={faqs} />
      <HomeYouMayLike />
      {/* <Appointment /> */}
      <FindLocation />
    </div>
  );
}
