import { NavBar } from "../../components/NavBar";
import Feed from "../../components/Feed";
import { getPosts } from "../../services/posts";
import { UserList } from "../../components/UserList";

export function FeedPage() {
  // const [posts, setPosts] = useState([]);
  // const [reloadPosts, setReloadPosts] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   const loggedIn = token !== null;
  //   if (loggedIn) {
  //     getPosts(token)
  //       .then((data) => {
  //         setPosts(data.posts);
  //         localStorage.setItem("token", data.token);
  //         // console.log(data)
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //         navigate("/login");
  //       });
  //   }
  // }, [navigate, reloadPosts]);

  // const token = localStorage.getItem("token");
  // if (!token) {
  //   navigate("/login");
  //   return;
  // }

  // const handleReloadPosts = () => {
  //   setReloadPosts((prevState) => !prevState);
  // };

  return (
    <>
    <NavBar />
    <div className="feed-padding">
    <div className="grid-container">
      <div className="grid-item">
      <Feed allowPosting={true} getMethod={getPosts}/>
      </div>
      <div className="grid-item">
      <UserList />
      </div>
    </div>
    </div>   
    </>
  );
}
