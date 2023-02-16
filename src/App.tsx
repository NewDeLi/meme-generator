import { FormSection } from "./components/FormSection";
import { GifSection } from "./components/GifSection";
import { MainLayout } from "./Layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <GifSection />
      <FormSection />
    </MainLayout>
  );
}

export default App;
