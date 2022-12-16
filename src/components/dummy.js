<Container>
      <div>
        <h1>Survey</h1>
        <Form className="mt-3">
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" ref={name}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formRadio">
          <Form.Label className="w-100">Gender</Form.Label>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              id="male"
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              id="female"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Image OR Video</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFileAudio">
            <Form.Label>Voice Note</Form.Label>
            <Form.Control type="file"/>
          </Form.Group>

          <Button variant="primary" type="button" onClick={submitFormHandler}>
            Send
          </Button>
        </Form>
      </div>
    </Container>