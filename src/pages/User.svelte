<script>
    import MainNavigator from "../components/MainNavigator.svelte";
    import { getContext, onMount, createEventDispatcher} from "svelte";
    import { push } from "svelte-spa-router";

    const userService = getContext("PlacemarkService")
    const dispatch = createEventDispatcher();
    export let user = {};
    let userInfo = {};

    onMount(async () => {
        user = await userService.getLoggedInUser();
        userInfo = user.data;
    });

    async function updateUserInformation() {
        const success = await userService.updateUser(userInfo._id, userInfo);
        if (success) {
            dispatch("message", {user: userInfo})
            push("/login");
        }
    }

    async function deleteUser() {
        const success = await userService.deleteUser(userInfo._id);
        if(success) {
            dispatch("message")
            push("/")
        }
    }
</script>

<MainNavigator/>
<section class="section">
    <form on:submit|preventDefault={updateUserInformation}>
        <h1 class="title">Your Account Details</h1>
        <h3 class = "subtitle">Update Your Details</h3>
        <div class="field is-horizontal">
            <div class="field-body">
                <div class="field">
                    <label for="firstName" class="label">First Name</label>
                    <input bind:value={userInfo.firstName} id="firstName" class="input" type="text" name="firstName">
                </div>
                <div class="field">
                    <label for="lastName" class="label">Last Name</label>
                    <input bind:value={userInfo.lastName} id="lastName" class="input" type="text" name="lastName">
                </div>
            </div>
        </div>
        <div class="field">
            <label for="email" class="label">Email</label>
            <input class="input" id="email" type="text" name="email" bind:value={userInfo.email}>
        </div>
        <div class="field">
            <label for="password" class="label">Password</label>
            <input class="input" id="password" type="password" name="password" placeholder="Enter new password">
        </div>
        <div class="field">
            <button type="button" class="btn btn-success">Submit</button>
        </div>
    </form>
    <div class="field">
        <br>
        <h2> Delete Account</h2>
        <button on:click={deleteUser} class="button is-danger">
      <span class="icon-is-small">
      <i class="fas fa-trash"></i>
      </span>
        </button>
    </div>
</section>