<script>
    import ErrorComponent from '$lib/ErrorComponent.svelte'
    import Image from '$lib/demo.jpg'
</script>

<main>
    <div class="container-fluid d-flex h-100">
        <div class="row w-100 flex-grow-1 align-content-start px-md-5 mx-lg-4">
            {#each Array(15) as _}
                <ErrorComponent src={Image} title="Demo image" id="demo"/>
            {/each}
        </div>
    </div>
</main>

<style>
    /* I needed this style in actual website, without this style, this error cannot be reproduced */
    main {
        width: 100%;
        height: 90%;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    main:before {
        content: ' ';
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
</style>