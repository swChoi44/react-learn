const Item = ({user, box})=>{
    return(
        <div className="box">
            <h2>{user.name}</h2>
            <h2>{box}</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknow 
            </p>
        </div>
    )
}

export default Item