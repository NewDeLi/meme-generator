import { FormSection } from "./components/FormSection";
import { ImageSection } from "./components/ImageSection";
import { MainLayout } from "./Layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <ImageSection />
      <FormSection />
    </MainLayout>
  );
}

export default App;
