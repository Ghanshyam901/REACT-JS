import React,{useState,useEffect,useContext} from 'react'
import {AuthContext} from '../Context/AuthProvider';
import {storage,database} from '../firebase';
function Signup() {
    const [email,setEmail] =useState('');
    const[password,setPassword] = useState('');
    const [name,setName] =useState('');
    const[error,setError] = useState('');
    const[file,setFile] = useState(null);
    const[loading,setLoading] = useState(false);
    const {signup} =useContext(AuthContext);
    console.log(signup);
    const handleSignup =async (e)=>{
        e.preventDefault();
       try{
        setLoading(true);
        let res = await signup(email,password);
        let uid = res.user.uid;
        console.log(uid); 
        const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);

        uploadTaskListener.on('state_changed',fn1,fn2,fn3);
        function fn1(snapshot){
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');         
        }

        function fn2(error){
            setError(error);
            setTimeout(()=>{
                setError(' ');
            },2000);

            setLoading(false);
        }

        async function fn3(){
            let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
            console.log(downloadUrl);

            await database.users.doc(uid).set({
                email:email,
                userId :uid,
                username : name ,
                createdAt : database.getCurrentTimeStamp(),
                profileUrl : downloadUrl,
                postIds:[]
            })
        }
        setLoading(false);
        console.log('user has Signed up');
       }catch(err){
           setError(err)
           setTimeout(()=> setError(''),2000);
           setLoading(false);
       }

       }
    

    const handleFileSubmit=(e)=>{
        let file = e.target.files[0];
        console.log(file);
        if(file != null){
            setFile(file);
        }

    }
    
    return (
        <div>
            <form onSubmit={handleSignup} >
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>

                </div>
                <div>
                <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='progile'>Profile image</label> 
                    <input type='file' accept='image/*' onChange={handleFileSubmit}></input>
                </div>
                <button type='submit' disabled={loading}>Login</button>
            </form>
        </div>
    )
}
// 

export default Signup