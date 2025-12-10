import ExpenseAction from "./ExpenseAction";
import ExpenseToolbar from "./ExpenseToolbar";
import "./Home.scss";
import ExpenseList from "./ExpenseList";

export default function Home() {
  return (
    <div className="home-container">
      <ExpenseAction />
      <ExpenseToolbar />
      <ExpenseList />
    </div>
  );
}
