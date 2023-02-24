import { CustomerDetailsCard } from "../components/CustomerDetailsCard";
import { TotalBalance } from "../components/TotalBalance";

export const HomeRoute = () => {
  return (
    <div class="container">
      <h1>Admin Dashboard</h1>
      <TotalBalance />
      <CustomerDetailsCard name="Jack" />
      <CustomerDetailsCard name="Rose" />
    </div>
  );
};
