import React from 'react';
import { Button, Table } from '@heroui/react';
import Link from 'next/link';


const UserTable = ({ userdata }) => {
    return (
        <Table>
            <Table.ScrollContainer>
                <Table.Content aria-label="Team members" className="min-w-[600px]">
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
                                        <Link href={`/users/${user._id}`}>
                                            <Button variant='outline'>Details</Button>
                                        </Link>
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