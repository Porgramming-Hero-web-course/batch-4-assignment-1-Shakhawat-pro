interface Profile {
    name: string,
    age: number,
    email: string
}

const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
}

function updateProfile (profile: Profile, updateProfile:Partial<Profile>) {
    return {...profile, ...updateProfile}    
}

console.log(updateProfile(myProfile, {name: "ratul", age: 5}));


