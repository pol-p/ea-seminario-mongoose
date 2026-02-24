import { IProject, ProjectModel } from "./models/project.js";

export async function createProject(project: IProject) {
    try{
        const pro = await ProjectModel.create(project);
        console.log("[!] Proyecto Guardado", pro);
        return pro;
    }catch(err){
        console.log("Error:", err)
    }
}

export async function getProjectById(id: string) {
    try{
        const pro = await ProjectModel.findById(id).populate('organization');
        console.log("[!] Proyecto Encontrado")
        return pro;
    }catch(err){
        console.log("Error:", err);
    }
}

export async function updateProject(id: string, data: Partial<IProject>) {
    try {
        const pro = await ProjectModel.findByIdAndUpdate(id, data, { new: true });
        console.log("[!] Proyecto Actualizado")
        return pro;
    } catch (err) {
        console.error("Error:", err);
    }
}

export async function deleteProject(id: string) {
    try{
        const pro = await ProjectModel.findByIdAndDelete(id);
        console.log("[!] Proyecto Eliminado");
        return pro;
    }catch(err){
        console.log("Error:", err)
    }
}

export async function listAllProjects() {
    try{
        const pro = await ProjectModel.find().lean();
        console.log("[!] Listando")
        return pro;
    }catch(err){
        console.log("Error:", err)
    } 
}