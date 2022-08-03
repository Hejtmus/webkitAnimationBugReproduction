<script lang="ts">
    export let title: string = '';
    export let id: string = '';
    export let src: string = '';
</script>

<div class="d-flex col-12 col-md-4" style="padding: 3px; aspect-ratio: 1/1">
    <a href="" class="d-flex flex-grow-1">
        <div class="img d-flex flex-grow-1" style={`background-image: url("${src}"`}>
            <div class="img-info d-flex">
                <div class="img-info-overlay d-flex text-dark">
                    <h2 class="text-rotate m-2">
                        <strong>
                            {title}
                        </strong>
                    </h2>
                    <h2 class="text-rotate m-2 mt-3">
                        {id}
                    </h2>
                </div>
            </div>
        </div>
    </a>
</div>

<style>
    .img {
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: relative;
        display: flex;
        -webkit-overflow-scrolling: touch;
    }
    .img-info {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 31rem;
        visibility: hidden;
        transition: 0.6s;
    }
    .img-info-overlay {
        background-color: rgba(255, 255, 255, 0.82);
        width: 40%;
        height: 100%;
        border-right: 1px solid black;
    }
    .img:hover > .img-info {
        right: 0;
        visibility: visible;
    }
    .text-rotate {
        writing-mode:vertical-lr;
        transform: rotate(180deg);
    }
</style>
