const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div>
            <div className="wrapper">
                <img src={image} alt="User avatar" className="profile-image" />
                <p className="card-title">{name}</p>
                <p className="nickname">{tag}</p>
                <p className="location">{location}</p>
                <p>{JSON.stringify(stats)}</p>
            </div>
        </div>
    )
}
export default Profile;