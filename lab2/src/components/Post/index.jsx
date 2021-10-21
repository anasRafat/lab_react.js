import { Card } from "../Card";

export const Post = (props) => {
  return (
    <Card>

      <dl>
        <dt>{props.title}</dt>
        <dd>{props.body}
        <button className="btn btn-danger  p-1 m-3" onClick={props.oneDelete}>
        X
      </button></dd>
        
      </dl>
      
    </Card>
  );
};
