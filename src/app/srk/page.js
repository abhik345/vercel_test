import Newpdf from "@/page/Newpdf";

export async function generateMetadata() {
  try {
    const response = await fetch(
      "https://api.pramodmaloo.com/wp-json/wp/v2/pages/10?_fields=acf.pdf&acf_format=standard"
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    const pdfUrl = data.acf.pdf.pdf_file;
    const screenshotUrl = data.acf.pdf.screenshot;

    return {
      title: "Stars come and go... But SRK comes once",
      description: "Stars come and go... But SRK comes once, Happens once & Stays Forever!",
      openGraph: {
        title: "Stars come and go... But SRK comes once",
        description: "Stars come and go... But SRK comes once, Happens once & Stays Forever!",
        url: pdfUrl,
        type: "website",
        images: [
          {
            url: screenshotUrl,
            width: 1200,
            height: 630,
            alt: "SRK PDF Thumbnail",
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching data for metadata:", error);
    return {
      title: "Stars come and go... But SRK comes once",
      description: "Error fetching data for metadata",
      openGraph: {
        title: "Stars come and go... But SRK comes once",
        description: "Error fetching data for metadata",
        url: "",
        type: "website",
        images: [],
      },
    };
  }
}

const Page = () => {
  return (
    <>
      <Newpdf />
    </>
  );
};

export default Page;
