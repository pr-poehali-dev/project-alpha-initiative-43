import ArcGalleryHero from "@/components/ArcGalleryHero";

const Index = () => {
  const images = [
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/c7e2360c-e463-4e5e-8b4d-3da21e9ad5f3.jpg",
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/04293fcb-8dac-4b50-bae5-5e2b676eb282.jpg",
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/d46b8f70-3aed-431c-83e5-a94238e4702a.jpg",
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/ba2952bd-3256-441a-8738-4a1d3ff7c300.jpg",
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/59fc1885-a0c2-4d86-860f-d2a743e77913.jpg",
    "https://cdn.poehali.dev/projects/1f35f89f-fb95-488a-9241-cd868cf7a5e6/files/c1bfb912-8cdb-4564-8d14-bec869ea825c.jpg",
  ];

  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        images={images}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;