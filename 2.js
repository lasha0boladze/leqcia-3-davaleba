function getCity(user) {
    const { banks } = user;
    if (banks && banks.length > 2 && banks[2].address) {
        const { address: { city } } = banks[2];
        return city;
    }
    return undefined;
}


const user = {
    banks: [
        {}, 
        {}, 
        {
            address: {
                city: 'New York'
            }
        }
    ]
};

e
console.log(getCity(user));
