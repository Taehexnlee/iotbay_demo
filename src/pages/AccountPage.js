import { Link } from 'react-router-dom';

const AccountPage = () => {

  return (
    <div>
      <h2>Account</h2>
        <Link to="/edit" className="content-display1">Edit Account</Link>
        <Link to="/view" className="content-display2">My Account Details</Link>
        <Link to="/paymentHistory" className="content-display3">Payment History</Link>
        <Link to="/logs" className="content-display4">View Logs</Link>
        <Link to="/paymentDetail" className="content-display5">Payment Detail</Link>
    </div>
  );
};

export default AccountPage;