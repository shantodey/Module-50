import React from 'react';
import { Button, Table } from '@heroui/react';
import Link from 'next/link';
import { PersonPencil } from "@gravity-ui/icons";
import DeleteButton from './DeleteButton';
import { deleteUser } from '../lib/actions';

const UserTable = ({ userdata }) => {

    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-150">
                    <Table.Header>
                        <Table.Column isRowHeader>Name</Table.Column>
                        <Table.Column>Role</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Email</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {
                            userdata.map(user =>
                                <Table.Row key={user._id}>
                                    <Table.Cell>{user.name}</Table.Cell>
                                    <Table.Cell>{user.role}</Table.Cell>
                                    <Table.Cell>{user.email}</Table.Cell>
                                    <Table.Cell>
                                        <div className=' flex gap-2'>

                                            <Link href={`/users/${user._id}`}>
                                                <Button variant='outline'>Details</Button>
                                            </Link>
                                            <Link href={`/users/${user._id}`}>
                                                <Button variant="secondary"><PersonPencil />Edit</Button>
                                            </Link>

                                            <DeleteButton user={user} deleteUserAction={deleteUser}></DeleteButton>

                                        </div>
                                    </Table.Cell>
                                </Table.Row>

                            )
                        }
                    </Table.Body>
                </Table.Content>
            </Table.ScrollContainer>
        </Table>
    );
};

export default UserTable;