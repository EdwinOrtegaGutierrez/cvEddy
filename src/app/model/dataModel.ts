interface Data {
    title:string,
    subtitle:string,
    date:string,
    image?:string
}

export interface Education extends Data {}

export interface WorkExperiences extends Data {
    data:string[]
}