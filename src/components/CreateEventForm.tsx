'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addEvent } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { CreateEventSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: {
  owner: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}) => {
  await addEvent(data);
  swal('Success', 'Your event has been added', 'success', {
    timer: 2000,
  });
};

/** The form component for creating an event. */
const CreateEventForm: React.FC = () => {
  const { data: session, status } = useSession();
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreateEventSchema),
  });

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <Container className="py-3">
      <Row className="justify-content-center">
        <Col xs={5}>
          <Col className="text-center">
            <h2>Create Event</h2>
          </Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <input
                    type="text"
                    {...register('name')}
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.name?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Date</Form.Label>
                  <input
                    type="date"
                    {...register('date')}
                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.date?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Start Time</Form.Label>
                  <input
                    type="time"
                    {...register('startTime')}
                    className={`form-control ${errors.startTime ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.startTime?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>End Time</Form.Label>
                  <input
                    type="time"
                    {...register('endTime')}
                    className={`form-control ${errors.endTime ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.startTime?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Location</Form.Label>
                  <input
                    type="text"
                    {...register('location')}
                    className={`form-control ${errors.location ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.location?.message}</div>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <input
                    type="text"
                    {...register('description')}
                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.description?.message}</div>
                </Form.Group>
                <input type="hidden" {...register('owner')} value={currentUser} />
                <Form.Group className="form-group">
                  <Row className="pt-3">
                    <Col>
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                    <Col>
                      <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                        Reset
                      </Button>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateEventForm;
