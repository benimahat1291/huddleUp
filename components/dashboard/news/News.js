import { useEffect, useState } from "react";
import styles from "../../../styles/News.module.css"

export const News = () => {

    const [category, setCategory] = useState("general")
    const [articles, setArticles] = useState([])
    useEffect(() => {
       getNews()
    },[])

    const getNews = async () => {
        const pageNumber = "1";
        let feedCategory = "general";
    
        const apiResponse = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${feedCategory}&pageSize=5`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY2}`,
                },
            },
    
        );
    
        const apiJson = await apiResponse.json();
        const { articles } = apiJson;
        setArticles(articles)
    }

    console.log(articles, category)
    console.log(articles.url)

    return (
        <div className={styles.newsContainer}>
           <div className={styles.newsHeader}>
               <h2>News</h2>
               <div className={styles.newsCategories}>
                   <button value="bussiness" onClick={(e)=>setCategory(e.target.value)}>Bussiness</button>
               </div>
            </div>

            <div className={styles.newsFeed}>
                {articles.map((e)=> (
                    <div className={styles.newsCard}>
                       <img src={e.urlToImage} alt={e.title}/>
                        <p>{e.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default News;
