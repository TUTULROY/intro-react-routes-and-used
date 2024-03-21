import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate();

    const postStyle = {
        border:'2px solid yellow',
        padding:'10px',
        borderRadius: '20px'
    }

    const handleShowtheDetails = ()=>{
navigate(`/post/${id}`);
    };

    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <p><small>{body}</small></p>

            <Link to={`/post/${id}`} >Post Details</Link>
            <Link  to={`/post/${id}`}>
            <button>Show Details</button>
            </Link>
            <button onClick={handleShowtheDetails}>Show Post Details</button>
        </div>
    );
};

export default Post;