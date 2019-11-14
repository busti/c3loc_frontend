<template>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div class="dropdown">
                <button class="btn text-light dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    36c3
                </button>
                <div class="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item text-light" href="#">Action</a>
                    <a class="dropdown-item text-light" href="#">Another action</a>
                    <a class="dropdown-item text-light" href="#">Something else here</a>
                </div>
            </div>

            <!--<ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                <li class="nav-item">
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    </form>
                </li>
            </ul>-->

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>

            <input class="form-control mr-sm-1" type="search" placeholder="Search" aria-label="Search">

        </nav>

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
export default {
  name: 'app',
};
</script>

<style>
    body, html, #app {
        background: #222;
    }
</style>
