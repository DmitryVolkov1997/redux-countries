import {useParams} from "react-router-dom";

const Detail = () => {
    const {name} = useParams();

    return (
      <div>
          Detail {name}
      </div>
    );
};

export default Detail;