<template>
    <div id="app">
        <Navbar/>

        <div class="input-group mt-2 mx-2">
            <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" aria-describedby="button-addon4">
            <div class="input-group-append" id="button-addon4">
                <button class="btn btn-outline-secondary" type="button">Button</button>
                <button class="btn btn-outline-secondary" type="button">Button</button>
            </div>
        </div>

        <div class="container mt-2">
            <table class="table table-striped table-dark">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Buttons</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <button class="btn btn-success active">
                                <font-awesome-icon icon="check-circle"/>
                            </button>
                            <button class="btn btn-secondary active">
                                <font-awesome-icon icon="edit"/>
                            </button>
                            <button class="btn btn-danger active">
                                <font-awesome-icon icon="trash"/>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <button class="btn btn-success active">
                                <font-awesome-icon icon="check-circle"/>
                            </button>
                            <button class="btn btn-secondary active">
                                <font-awesome-icon icon="edit"/>
                            </button>
                            <button class="btn btn-danger active">
                                <font-awesome-icon icon="trash"/>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>
                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                            <button class="btn btn-success active">
                                <font-awesome-icon icon="check-circle"/>
                            </button>
                            <button class="btn btn-secondary active">
                                <font-awesome-icon icon="edit"/>
                            </button>
                            <button class="btn btn-danger active">
                                <font-awesome-icon icon="trash"/>
                            </button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
export default {
  name: 'app',
  components: {Navbar},
};
</script>

<style>
    body, html, #app {
        background: #222;
    }
</style>
