import styles from "./BlogCard.module.css";


const BlogCard=({})=>{
    return (
        <div className={styles.blogCard}>
            <img src={require("../../assests/blog.png")} alt="Blog" />
            <p className={styles.date}>Medical | March 31, 2022</p>
            <h3 className={styles.title}>6 Tips To Protect Your Mental Health When You’re Sick</h3>
            <div className={styles.readMore}>
                 <img src={require("../../assests/person.png")} alt="arrow"/>
                 <p>Rebecca Lee</p>
            </div>
        </div>
    )
}

export default BlogCard