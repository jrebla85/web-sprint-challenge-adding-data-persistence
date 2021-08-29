// build your `Project` model here
const db = require('../../data/dbConfig.js');




const convertBooleansFromSQLite = (project) => {

    project.project_completed = (project.project_completed ? true : false)
    console.log("in the helper: ", project)
    return project
}

const convertBooleansToSQLite = (project) => {

    project.project_completed = (project.project_completed ? 1 : 0)
    console.log("in the helper: ", project)
    return project

}

const getAll = () => {
    const projects = db("projects") 
    return projects.then((projects) => {
        projects.forEach(project =>
        convertBooleansFromSQLite(project)
        )
        return projects
    })
}

const getById = (id) => {

    const project = db("projects").where("project_id", id).first()

    return project.then((project) => {

        return convertBooleansFromSQLite(project)

        // return projects
    })




}

const create = async (newProject) => {
    newProject = convertBooleansToSQLite(newProject);
    console.log("in create, newProject after converted: ", newProject)
    const [id] = await db("projects").insert(newProject);
    return getById(id)

}

module.exports = {
    getAll,
    getById,
    create
};