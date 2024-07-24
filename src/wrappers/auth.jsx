import { Redirect } from 'umi';

export default (props) => {
  if (true) {
    return props.children;
  } else {
    return <Redirect to="/login" />;
  }
};
