import {pet} from "@prisma/client"

export type TPet = Omit<pet,'id'>;