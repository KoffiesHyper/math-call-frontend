
type LoginInputProps = {
    inputName: string
}

export default function LoginInput({ inputName }: LoginInputProps){
    <div>
        <h3>{inputName}</h3>
        <input />
    </div>
}