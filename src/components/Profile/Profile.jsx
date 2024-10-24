import clsx from 'clsx';
import s from './Profile.module.css';
const Profile = ({ name, tag, location, image }) => {
    return (
        <div>
            <div className={s.wrapper}>
                <div className={s.card}>
                <img src={image} alt="User avatar" className="profile-image" />
                <p className={s.title}>{name}</p>
                <p className={clsx(s.nickname, s.gray)}>{tag}</p>
                <p className={clsx(s.location, s.gray)}>{location}</p>
                {/* <p>{JSON.stringify(stats)}</p> */}
            </div>
            </div>
        </div>
    )
}
export default Profile;