import React from 'react';

const Home = () => {

    return (
        <div className={box}>
            <section className={intro}>
                <h1 className={introHeader}>Welcome to art site</h1>
                <p className={introText}>here you can buy art from every corner of the world</p>
            </section>
            <section className={arts}>
                <img className={pic} src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1549277513-f1b32fe1f8f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1558865869-c93f6f8482af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1762&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=816&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1599894019794-50339c9ad89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=848&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1579541814924-49fef17c5be5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1607250589107-b8efff3a8d5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=856&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1548136480-4ad259749c46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="peoples" />
                <img className={pic} src="https://images.unsplash.com/photo-1576503918400-0b982e6a98bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=946&q=80" alt="peoples" />
            </section>
        </div> 
    )        
};
export default Home;

//style 
const box ='max-w-5xl container flex flex-col items-center flex-auto'
const intro = 'w-full py-12 flex flex-col items-center'
const introHeader = 'text-5xl italic mb-6'
const introText = 'text-zinc-400 italic'
const arts = 'flex flex-wrap space-2 '
const pic = 'w-1/2'