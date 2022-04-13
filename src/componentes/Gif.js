import "./Gif.css";

export default function Gif({gift}){
return <article className="gif-container">
     
{gift.map((gif) => {
  return <a href='#4' key={gif.id} className="gif">
  <h4>{gif.title}</h4>
  <small>{gif.id}</small>
  <img src={gif.url} alt={gif.title}/>
  </a>
}
)}
</article>
};