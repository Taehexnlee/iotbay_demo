import { Link } from 'react-router-dom';

const AccountPage = () => {

  return (
    <div>
      <h2>Account</h2>
        <Link to="/edit" className="content-display1">Edit Account</Link>
        <Link to="/view" className="content-display2">My Account Detail</Link>
        <Link to="/paymentHistory" className="content-display3">Payment History</Link>
        <Link to="/logs" className="content-display4">View Logs</Link>
    </div>
  );
};

export default AccountPage;