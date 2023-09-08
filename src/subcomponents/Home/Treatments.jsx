import React from "react";

const Treatments = () => {
  const services = [
    {
      title: "Minimally Invasive Surgery",
      uri: "#",
      about:
        "Surgery that is done using small incisions (cuts) and few stitches. During minimally invasive surgery, one or more small incisions may be made in the body. A laparoscope (thin, tube-like instrument with a light and a lens for viewing) is inserted through one opening to guide the surgery",
    },
    {
      title: "Endourology",
      uri: "#",
      about:
        "Endourology refers to a subspecialty in urology where minimally invasive techniques are used to inspect the urinary tract and perform surgery. A surgeon with special training feeds tiny cameras and surgical tools through a thin, flexible tube called an endoscope.",
    },
    {
      title: "Pediatric Urology",
      uri: "#",
      about:
        "Pediatric urologists are surgeons who can diagnose, treat, and manage children’s urinary and genital problems. If your child has an illness or disease of the genitals or urinary tract (kidneys, ureters, bladder), a pediatric urologist has the experience and qualifications to treat your child.",
    },
    {
      title: "Andrology",
      uri: "#",
      about:
        "Andrology is a medical specialty that deals with the male reproductive system and urological problems found only in men. Andrology is the direct equivalent of gynecology, but unlike gynecology, it is not widely recognized as its own distinct specialty.",
    },
    {
      title: "Urolithiasis",
      uri: "#",
      about:
        "Renal stones are formed within the kidneys, and this is called nephrolithiasis. Urolithiasis is a condition that occurs when these stones exit the renal pelvis and move into the remainder of the urinary collecting system, which includes the ureters, bladder, and urethra",
    },
    {
      title: "Laparoscopic Urology",
      uri: "#",
      about:
        "Laparoscopic urologic surgery is a surgery where a doctor corrects urological issues without causing much agony to the patient. It is a minimally invasive surgery that involves the use of a laparoscope which has an inbuilt camera and several long and thin surgical instruments.",
    },
    {
      title: "Urethral Stricture",
      uri: "#",
      about:
        "A urethral (u-REE-thrul) stricture involves scarring that narrows the tube that carries urine out of your body (urethra). A stricture restricts the flow of urine from the bladder and can cause a variety of medical problems in the urinary tract, including inflammation or infection",
    },
    {
      title: "Prostate",
      uri: "#",
      about:
        "The prostate is a part of the male reproductive system, which includes the penis, prostate, seminal vesicles, and testicles. The prostate is located just below the bladder and in front of the rectum. It is about the size of a walnut and surrounds the urethra (the tube that empties urine from the bladder).",
    },
    {
      title: "Prostate Cancer",
      uri: "#",
      about:
        "The prostate is a part of the male reproductive system, which includes the penis, prostate, seminal vesicles, and testicles. The prostate is located just below the bladder and in front of the rectum. It is about the size of a walnut and surrounds the urethra (the tube that empties urine from the bladder).",
    },
    {
      title: "Bladder Cancer",
      uri: "#",
      about:
        "This cancer typically affects older adults. It’s usually diagnosed early when it’s still treatable. It’s likely to recur, so follow-up tests are typically recommended. The most common symptom is blood in the urine. Treatments include surgery, biological therapy, and chemotherapy.",
    },
    {
      title: "Laser Treatment In Urology",
      uri: "#",
      about:
        "The Holmium laser has now been in clinical use in urology for several years. The indications for its use continue to expand, and now include lithotripsy (breaking the stone) and urothelial tumor ablation anywhere in the urinary tract, resection of the prostate, and incision of various urinary tract strictures.",
    },
    {
      title: "Reconstructive Urology",
      uri: "#",
      about:
        "Reconstructive urology is surgery to restore normal function by repairing, rerouting, or recreating areas of the upper and lower urinary tract and some reproductive organs.",
    },
    {
      title: "Laparoscopic Surgery",
      uri: "#",
      about:
        "Laparoscopy is a type of surgical procedure that allows a surgeon to access the inside of the abdomen (tummy) and pelvis without having to make large incisions in the skin. This procedure is also known as keyhole surgery or minimally invasive surgery.",
    },
    {
      title: "Prostate (Thuflep)",
      uri: "#",
      about:
        "Thulium fibre laser enucleation of the prostate (Thuflep) is a minimally invasive treatment for BPH. The surgeon uses the laser to enucleate the prostate gland tissue, leaving just the capsule in place. Thuflep is performed transurethrally, using a Thulium fibre laser to separate the plane between the prostate gland tissue and the prostate capsule. This prostate laser surgery allows complete resection of all adenomatous tissue, minimizing the need for future re-treatment.",
    },
    {
      title: "Retrograde Intrarenal Surgery (RIRS)",
      uri: "#",
      about:
        "Retrograde intrarenal surgery (RIRS) is the least invasive procedure for doing surgery within the kidney using a viewing tube called a fiberoptic endoscope. In RIRS the scope is placed through the urethra (the urinary opening) into the bladder and then through the ureter into the urine-collecting part of the kidney.",
    },
    {
      title: "Percutaneous Nephrolithotomy",
      uri: "#",
      about:
        "Retrograde intrarenal surgery (RIRS) is the least invasive procedure for doing surgery within the kidney using a viewing tube called a fiberoptic endoscope. In RIRS the scope is placed through the urethra (the urinary opening) into the bladder and then through the ureter into the urine-collecting part of the kidney.",
    },
    {
      title: "Vasectomy Reversal",
      uri: "#",
      about:
        "Vasectomy reversal is surgery to undo a vasectomy. During the procedure, a surgeon reconnects each tube (vas deferens) that carries sperm from a testicle into the semen. After a successful vasectomy reversal, sperm are again present in the semen, and you may be able to get your partner pregnant.",
    },
    {
      title: "No-Scalpel Vasectomy",
      uri: "#",
      about:
        "No-scalpel vasectomy is a type of vasectomy procedure in which a specifically designed ringed clamp and a dissecting hemostat is used to puncture the scrotum to access the vas deferens. This is different from a conventional or incisional vasectomy where the scrotal opening is made with a scalpel",
    },
  ];
  return (
    <div className="container md:w-[83%] grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {services.map((element) => (
        <div className=" text-center justify-center items-center bg-red-300 flex flex-col p-5 font-[Roboto]">
          <img
            className="w-[50px] h-[50px] self-center"
            src={element.uri}
            alt=""
          />
          <h1 className="text-2xl font-bold">{element.title}</h1>
          <p>{element.about}</p>
        </div>
      ))}
    </div>
  );
};

export default Treatments;
