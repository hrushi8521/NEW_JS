function update_profile(name, age, gender){
    try {
        if(!name || !age || !gender){
            throw new Error("Please fill all fields")
        }

    }catch(error){
        console.log(error.name + " : " + error.message);
    }
    
    finally{

        console.log("Profile updated");
    }
}

update_profile(null, null, null)