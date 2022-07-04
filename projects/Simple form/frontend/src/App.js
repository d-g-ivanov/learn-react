import "./styles.css";

// components
import Form from "./components/Form";

// others
import { FormProvider } from "./store/FormContext";

export default function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
