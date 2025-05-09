import logo from '../assets/logo.svg'

function Footer() {
    return (
        <>
            <footer class="text-center m-auto pb-20 items-center justify-center">
                <hr class="text-zinc-900 mb-5 mx-auto text-center" />
                <div id="Contatti">
                    <h2 class="font-bold">CONTACTS</h2>
                    <p>Email: <a href="mailto:info@riccardocinaglia.it">info@riccardocinaglia.it</a></p>
                </div>
                <a href="/"><img src={logo} alt="logo" class="w-25 mx-auto mt-5 mb-5" /></a>
                <small>Copyright &copy; 2025 | Riccardo Cinaglia</small>
            </footer>
        </>
    )
}

export default Footer