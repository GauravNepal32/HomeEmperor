import profileImg from "../../images/profile/profile.png"
const StudentProfileUpdate = ({ userDetails, handleSubmit }) => {
    return (
        <div className='profile-info-container mt-5'>
            <div className='profile-image-container'>

            </div>
            <form action="" onSubmit={handleSubmit}>
                <div className='text-info-container mt-2'>
                    <div className="col ms-2">
                        <img className="img-flud" src={profileImg} alt="" width={80} height={80} />
                    </div>
                    <div className='row row-cols-sm-2 row-cols-1'>
                        <div className='col'>
                            <label htmlFor="name">
                                Name
                            </label>
                            <input className="form-control" defaultValue={userDetails.name} type="text" name="name" id="name" required/>
                        </div>
                        <div className='col mt-3 mt-md-0'>
                            <label htmlFor="phone">
                                Phone Number
                            </label>
                            <input className="form-control" defaultValue={userDetails.phone} type="text" name="phone" id="phone" required/>
                        </div>
                    </div>
                    <div className='row mt-3 row-cols-sm-2 row-cols-1'>
                        <div className='col'>
                            <label htmlFor='lastName'>Email</label>
                            <input
                                value={userDetails.email}
                                type='email'
                                className='form-control'
                                required
                            />
                        </div>
                    </div>
                    <div className='row mt-3'>
                        <div className='text-end'>
                            <input className="btn btn-type-2" type="submit" value="Submit" />

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default StudentProfileUpdate;