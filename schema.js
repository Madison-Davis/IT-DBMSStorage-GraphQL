const graphql = require("graphql");
const { argsToArgsConfig } = require("graphql/type/definition");
const _ = require("lodash");
const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLInt, GraphQLFloat } = graphql;

// data
var data = require("./data.json");

const SchoolType = new GraphQLObjectType({
    name: "School",
    fields: () => ({
        School_Code: { type: GraphQLString },
        School_Name: { type: GraphQLString },
        School_Type: { type: GraphQLString },
        Function: { type: GraphQLString },
        Contact_Name: { type: GraphQLString },
        Address: { type: GraphQLString },
        Town: { type: GraphQLString },
        State: { type: GraphQLString },
        Zip: { type: GraphQLString },
        Phone: { type: GraphQLString },
        Fax: { type: GraphQLString },
        Grade: { type: GraphQLString },
        District: { type: GraphQLString },
        District_Code: { type: GraphQLString },
        Total_Enrollment: { type: GraphQLString },
        Percent_Students_Disabilities: { type: GraphQLString },
        Percent_Males: { type: GraphQLString },
        Percent_Females: { type: GraphQLString },
        Number_Classes: { type: GraphQLString },
        Average_Class_Size: { type: GraphQLString },
        Number_Students: { type: GraphQLString },
        Average_Salary: { type: GraphQLString },
        Total_Expenditures: { type: GraphQLString },
        Expenditures_per_Pupil: { type: GraphQLString },
        PPI: { type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType", // make up some queries you can do
    fields: {
        school: {
            type: SchoolType,
            args: {School_Code: { type: GraphQLString }},
            resolve(parent, args) {
                // code to get data from database
                return _.find(data, { School_Code: args.School_Code })
            }
        }
    }
});

module.exports = new GraphQLSchema({
    // query of the schema
    query: RootQuery
})