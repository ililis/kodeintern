import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Maincontent from "../maincontent/Maincontent";

const AppRouter = (props) => {
  //    qa back_office frontend hr pr backend support
  return (
    <Routes>
      {props.deps.map(curdep => (
        <Route key={curdep.dir} path={'/'+curdep.dir} element={<Maincontent dep={curdep.dir} /> }/>
      ))}
      <Route path="*" element={<Navigate to="/all" replace />} />
    </Routes>
  );
};

export default AppRouter;
