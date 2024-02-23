import { FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { GoPencil } from "react-icons/go";

import Link from "next/link";
// import { deleteInvoice } from '@/app/lib/actions';

export function CreateRecipe() {
	return (
		<Link href="/admin/create" className="d-flex align-items-center gap-2 py-2 px-3 bg-primary">
			<span className="text-white">Create Invoice</span> <FaPlus className="text-white" />
		</Link>
	);
}

export function UpdateRecipe({ id }: { id: string }) {
	return (
		<Link href={`/dashboard/invoices/${id}/edit`} className="border p-2">
			<GoPencil />
		</Link>
	);
}

export function DeleteRecipe({ id }: { id: string }) {
	const deleteInvoiceWithId: any = [];

	return (
		<form action={deleteInvoiceWithId}>
			<button className="border p-2">
				<FaRegTrashAlt />
			</button>
		</form>
	);
}
