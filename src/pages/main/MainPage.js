import './img/undraw_empty_street_re_atjq.svg';


export default function MainPage() {
  return (
    <>
      <div className="container h-100" style={{marginTop: '-72px'}}>
        <div className="row h-100 align-items-center">
          <div className="col-sm-12 col-md-6 text-center">
            <h1 className="display-3" style={{fontWeight: 'bold'}}>
                Title
            </h1>
            <h2 className="text-muted fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie enim non sapien viverra commodo.
            </h2>
          </div>

          <div className="col-sm-12 col-md-3 mx-auto">
            <div className="card shadow-lg">
              <div className="card-body">
                <form>
                <div className="mb-2">
                  <label for="exampleInputEmail1" className="form-label mb-1">Email address</label>
                  <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label mb-1">Password</label>
                  <input type="password" className="form-control form-control-sm" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label w-100 user-select-none" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary text-white w-100 mt-3">Submit</button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="container-fluid h-100 bg-black">
        <div className="row h-100 align-items-center">
          <div className="col-sm-12 col-md-6 text-center">
            <img className="w-100" src="/img/undraw_empty_street_re_atjq.svg" alt="image1"/>
          </div>

          <div className="col-sm-12 col-md-6 text-center">
            <h1 className="display-3 text-light" style={{fontWeight: 'bold'}}>
                Title
            </h1>
            <h2 className="text-secondary fw-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie enim non sapien viverra commodo.
            </h2>
          </div>

        </div>
      </div>
    </>
  )
};
