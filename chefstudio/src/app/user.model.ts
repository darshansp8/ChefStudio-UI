export interface User{
    user_id: number,
    name: string,
    email: string,
    created_array?: string[],
    saved_array?: string[],
    onboarding?: number;
    user_preferences?: string[] 
}