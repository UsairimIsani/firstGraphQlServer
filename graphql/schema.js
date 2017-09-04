export const typeDefs = `
type Patient{
    id:ID!
    name:String!
    age:Int!
    disease: String!
}
type Doctor{
    id:ID!
    name:String!
    age:Int!
    speciality: String!
}
type Query{
    patients:[Patient!]!
    patient(id:ID!):Patient!
    doctors:[Doctor!]!
    doctor(id:ID!):Doctor!
}
type Mutation{
    createPatient(name:String!,age:Int!,disease:String!):Patient
    createDoctor(name:String!,age:Int!,speciality:String!):Doctor  
}
`;